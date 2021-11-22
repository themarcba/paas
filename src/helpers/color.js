const purple = { min: 260, max: 275 }

export const randomBetween = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) + min)
}
export const randomHue = ({ min, max }) => randomBetween(min, max)
export const randomSaturation = () => randomBetween(20, 100)
export const randomLightness = () => randomBetween(20, 80)

export const generateHsl = () => {
    const h = randomHue(purple)
    const s = randomSaturation()
    const l = randomLightness()
    return `hsl(${h}, ${s}%, ${l}%)`
}
