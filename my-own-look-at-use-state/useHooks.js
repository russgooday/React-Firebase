// helper function
const notEquals = (source, target) =>
    source.some((prop, i) => !Object.is(prop, target[i]))

const React = (() => {
    const hooks = []
    let index = 0

    const useState = (initVal) => {
        hooks[index] = hooks[index] ?? initVal
        const localIndex = index
        const setState = (val) => { hooks[localIndex] = val }

        return [hooks[index++], setState]
    }

    const useEffect = (effect, currDependencies) => {
        const prevDependencies = hooks[index]
        const hasChanged = (prevDependencies)
            ? notEquals(prevDependencies, currDependencies)
            : true

        if (hasChanged) effect()
        hooks[index] = currDependencies
        index++
    }

    const render = (Component) => {
        const component = Component()
        component.render()
        index = 0 // reset index
        return component
    }

    return { useState, useEffect, render }
})()

export { React }
