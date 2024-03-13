import { classNames } from './classNames'

describe('classNames', () => {
    test('With base class', () => {
        expect(classNames('MainClass')).toBe('MainClass')
    })

    test('With additional classes', () => {
        expect(classNames('MainClass', ['test1', 'test2']))
            .toBe('MainClass test1 test2')
    })

    test('With additional classes and undefined', () => {
        expect(classNames('MainClass', ['test1', 'test2', undefined]))
            .toBe('MainClass test1 test2')
    })

    test('With mods', () => {
        expect(classNames('MainClass', [], { test: true, ach: true }))
            .toBe('MainClass test ach')
    })

    test('With false mods', () => {
        expect(
            classNames('MainClass', [], { test: true, ach: true, ho: false }),
        )
            .toBe('MainClass test ach')
    })

    test('With all args', () => {
        expect(
            classNames(
                'MainClass',
                ['test1'],
                { test: true, ach: true, ho: false },
            ),
        )
            .toBe('MainClass test1 test ach')
    })
})
