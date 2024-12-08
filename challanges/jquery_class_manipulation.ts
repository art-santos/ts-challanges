interface JQuery {
    toggleClass: (className: string, state?: boolean) => JQuery;
    addClass: (className: string) => JQuery;
    removeClass: (className: string) => JQuery;
  }
  export default function $(selector: string): JQuery {

    //@ts-ignore
    const element = document.querySelector(selector);
    if (!element) {
      throw new Error('Element not found');
    }
  
    return {
      toggleClass: function (className: string, state?: boolean): JQuery {
        if (typeof state === 'boolean') {
          if (state) {
            element.classList.add(className);
          } else {
            element.classList.remove(className);
          }
        } else {
          element.classList.toggle(className);
        }
        return this;
      },
      addClass: function (className: string): JQuery {
        throw 'Not implemented!';
      },
      removeClass: function (className): JQuery {
        throw 'Not implemented!';
      },
    };
  }


// <button class="foo bar">Click me</button>
// $('button').toggleClass('bar'); // <button class="foo">Click me</button>
// $('button').addClass('baz'); // <button class="foo baz">Click me</button>
// $('button').removeClass('foo'); // <button class="baz">Click me</button>
// $('button').toggleClass('bar'); // <button class="baz bar">Click me</button>
// The return value of most jQuery manipulation APIs is the jQuery object itself so that method calls can be chained. The above can be further simplified again:


// <button class="foo bar">Click me</button>
// $('button')
//   .toggleClass('bar')
//   .addClass('baz')
//   .removeClass('foo')
//   .toggleClass('bar');
// <button class="baz bar">Click me</button>