export default function setCancellableInterval(
    callback: Function,
    delay?: number,
    ...args: Array<any>
  ): () => void {
        
       const clear = setInterval(() => {
            callback(...args)
        }, delay)

        return () => {
            clearInterval(clear)
        }
  }

let i = 0


const cancel = setCancellableInterval(() => {
    i++;
    console.log(i)
}, 1)


console.log(i)

    setTimeout(() => {
        cancel()
    }, 1000)



console.log(i)