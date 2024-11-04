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