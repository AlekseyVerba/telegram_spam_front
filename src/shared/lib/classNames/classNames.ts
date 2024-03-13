export type Mods = Record<string, string | boolean>

export const classNames = (
    main: string = '',
    additional: (string | undefined)[] = [],
    mods: Mods = {},
): string => [
    main,
    ...additional.filter(Boolean),
    ...Object.entries(mods)
        .filter(([cls, value]) => Boolean(value))
        .map(([cls]) => cls),
].join(' ')
