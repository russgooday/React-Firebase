import { React } from './useHooks.js'

const Component = (props) => {
    const [count, setCount] = React.useState(0)
    const [text, setText] = React.useState('apple')

    React.useEffect(() => {
        console.log(`Current count is ${count}`)
    }, [count])

    return {
        render: () => console.log({ count, text }),
        click: () => setCount(count + 1),
        type: setText
    }
}

let App = React.render(Component)
// Current count is 0
// { count: 0, text: 'apple'}

App.type('pear')
App = React.render(Component)
// count is same - no effect
// { count: 0, text: 'pear'}

App.click()
App = React.render(Component)
// Current count is 1
// { count: 1, text: 'pear'}

