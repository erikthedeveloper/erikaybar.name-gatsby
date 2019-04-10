---
title: "Refactoring React - Extracting Layout Components"
slug: refactoring-react-extracting-layout-components
date: "2017-01-20"
tags: ["React", "javascript", "video"]
---

With React, abstraction doesn't have to be limited to separating [presentational and container components](https://medium.com/@dan_abramov/smart-and-dumb-components-7ca2f9a7c7d0#.b5cq8vczy) or [lifting up state](https://facebook.github.io/react/docs/lifting-state-up.html). Often, extracting a simple layout component can serve as a good abstraction to either clean up a bloated component or result in a generalized, reusable piece of UI. 

A good sign that you might benefit from extracting a layout component is a bloated `render` method with many levels of nesting. Others might be a lengthy component definition or duplicated/verbose HTML patterns throughout your components. It's easy for your `render` method to creep upwards in size as you can easily dump ~~HTML~~ [JSX](https://facebook.github.io/react/docs/introducing-jsx.html) into them and be on your merry way. Extracting layout components can tame bloated React components and help define clearer boundaries within your UI.

When developing a large or complex component, I find it's useful to default to duplication and less abstraction, keeping it all within a single component to begin with. I prefer to avoid making assumptions and drawing boundaries too early on. This frees me up to experiment and revisit refactoring and abstraction later on in the process. Once I've been through a few iterations of a component, I usually have a pretty good feel of where to start drawing more concrete boundaries.

---

A layout component could be something as simple as a `Section` component that wraps the given content with some container `div`s and applies some styles/classes.

Another example I find useful is a `Button` component that takes care of applying styling related classes and DOM attributes, while exposing a more friendly API via `props`. Here is an example of what converting the [button from Bootstrap 4](https://v4-alpha.getbootstrap.com/components/buttons/) into a React component might look like.

It could apply all the Bootstrap-specific CSS classes, HTML attributes, and even [appropriately render a `<button>` OR a `<a>` ](https://v4-alpha.getbootstrap.com/components/buttons/#button-tags) to enable using `href` with the same button component. It could allow usages such as:

```javascript
const SomeButtons = ({someAction}) => (
  <div>
    <Button onClick={someAction}>Click Me</Button>

    <Button href="some/url" style="info">A Link!</Button>

    <Button 
      onClick={someAction} 
      style="danger"
      size="lg" 
      outline
      block
      disabled
    >
      DO NOT CLICK!!
    </Button>
  </div>
)
```

That could enable any combination of the [supported Bootstrap button examples](https://v4-alpha.getbootstrap.com/components/buttons/#examples) via this React component

![Bootstrapp 4 button examples](/content/images/2017/01/Buttons_-_Bootstrap.png)

Example implementation _*100% untested :)_

```javascript
// some/path/components/Button.js
import React, { PropTypes } from 'react';
import classnames from 'classnames';

/**
 * A button component (that also supports href)!
 *  Based on Bootstrap 4 button
 *  100% untested :)
 * @see https://v4-alpha.getbootstrap.com/components/buttons/
 */
const Button = (props) => {

  const btnClasses = classnames(
    'btn',
    {
      `btn-${props.style}`: !props.outline,
      `btn-outline-${props.style}`: props.outline,
      `btn-${props.size}`: props.size,
      'btn-block': props.block,
    }
  )

  // If we are disabled, lock it down!!
  const onClick = props.disabled
    ? (event) => {event.preventDefault()}
    : props.onClick

  // Only pass through props that aren't explicitly used by Button
  // @see https://facebook.github.io/react/warnings/unknown-prop.html
  const {
    type, style, size, outline, block, disabled, href, onClick,
    ...passableProps
  };

  // If props.href is present, render a <a />
  if (props.href) {
    const aClasses = classnames(
      btnClasses,
      {
        'disabled': props.disabled, 
      }
    )

    return (
      <a
        {...passableProps}
        href={props.href}
        className={aClasses}
        role="button"
        aria-disabled={props.disabled}
        onClick={onClick}
      >
        {props.children}
      </a>
    )
  }

  return (
    <button
      {...passableProps}
      className={btnClasses}
      type={props.type}
      disabled={props.disabled}
      onClick={onClick}
    >
     {props.children}
    </button>
  )
}

Button.propTypes = {
  // Bootstrap specific props
  type: PropTypes.oneOf(['button', 'submit', 'reset']),
  style: PropTypes.oneOf(['primary', 'secondary', 'success', 'info', 'warning', 'danger']),
  size: PropTypes.oneOf(['sm', 'lg']),
  outline: PropTypes.bool,
  block: PropTypes.bool,
  disabled: PropTypes.bool,

  // Enable "link buttons"!
  href: PropTypes.string,

  // Explicitly specify other used props
  onClick: PropTypes.func,
}

// Provide sensible defaults
Button.defaultProps = {
  type: 'button',
  style: 'primary',
}
```

---

## Example by Video

In this video, I walk through extracting a `MonthGrid` component out of this React `Calendar` component that so far, I had kept within a single component/render method. _*There is some static feedback from `0:40` - `1:10`. It does go away :)_


<iframe width="853" height="480" src="https://www.youtube.com/embed/qGbfD_oXXn4?rel=0" frameborder="0" allowfullscreen></iframe>



### Breakdown Components Visually

What I begin with, is a single `Calendar` component that consists of all of this:
![React Calendar Component](/content/images/2017/01/Skitch---All-As-Calendar-3.png)

Ultimately breaking it down into smaller pieces of UI such as:
![Breaking down UI into smaller components](/content/images/2017/01/Skitch---Component-Breakdown-1.png)

### Show Me The Code!

To get a feel of what I mean by a bloated render function, take a look at this **before**. Notice the giant blob which is `.MonthGrid` and everything nested under it.

```javascript
// import ...

class Calendar extends React.Component {
  
  // ...

  render() {
    const {currentMonth} = this.props;

    const visibleDates = calendarMonthDates(currentMonth);

    return (
      <div className="Calendar">

        {/* ... */}

        <div className="MonthGrid">
          {chunk(visibleDates, 7).map((weekChunk, i) => (
            <div className="MonthGrid__row" key={i}>
              {weekChunk.map((date) => (
                <div className="MonthGrid__item" key={date.getMonth() + date.getDate()}>
                  <div className="MonthGrid__item__height" />
                  <div className="MonthGrid__item__content">

                    <div className={this.getDayClassName(date)}>
                      <div className="Day__date">
                        {date.getDate()}
                      </div>
                    </div>

                  </div>
                </div>
              ))}
            </div>
          ))}
        </div>

      </div>
    )
  }
}

```


Cleaning this up a bit, I end up extracting 2 components `Day`, and `MonthGrid`. `MonthGrid` handles all of the layout-specific logic and DOM, while `Day` exposes an API that we can build on (as seen here: https://github.com/erikthedeveloper/react-calendar-components).


```javascript
// import ...
import MonthGrid from '../MonthGrid';
import Day from '../Day';

class Calendar extends React.Component {

  // ...

  render() {
    const {currentMonth} = this.props;

    const visibleDates = calendarMonthDates(currentMonth);

    return (
      <div className="Calendar">

        {/* ... */}

        <MonthGrid>
          {visibleDates.map((date) => (
            <Day date={date} key={date.toString()} />
          ))}
        </MonthGrid>

      </div>
    )
  }
}

```

---

If you are interested in poking around some more React code, I've got this example project https://github.com/erikthedeveloper/react-calendar-components along with demo via React Storybook [https://erikthedeveloper.github.io/react-calendar-components/](https://erikthedeveloper.github.io/react-calendar-components/?selectedKind=Composing%20Calendar&selectedStory=Select%20Range%20%2B%20Day%20Indicators&full=0&down=0&left=1&panelRight=0&downPanel=kadirahq%2Fstorybook-addon-actions%2Factions-panel). I've been exploring composing UI and behavior from multiple higher order components. 

---

If you found this interesting and/or useful, let me know below or ping me on Twitter [@erikthedev_](https://twitter.com/erikthedev_). I'd love to hear what approaches/libraries others are finding useful!
