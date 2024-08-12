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

setTimeout(() => {
    cancel()
}, 1000)