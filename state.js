const state = {
    property1: {
        id: 0,
        innerProp1: {
            id: 3,
            toggle: false,
            name: 'hello',
            children: {},
        },
        innerProp2: {
            id: 4,
            toggle: true,
            name: 'hello',
            children: {},
        },
        innerProp3: {
            id: 5,
            toggle: false,
            name: 'hello',
            children: {},
            list: ['hi', 'hello', 'goodbye'],
        }
    },
    property2: {
        id: 1,
        innerProp4: {
            id: 6,
            toggle: false,
            name: 'hello',
            children: {},
            inputField: {
                valid: false,
                value: 'abcd',
            }
        },
        innerProp5: {
            id: 7,
            toggle: false,
            name: 'hello',
            children: {},
        },
        innerProp6: {
            id: 8,
            toggle: true,
            name: 'hello',
            children: {},
        }
    },
    property3: {
        id: 2,
        innerProp7: {
            id: 9,
            toggle: false,
            name: 'testing',
            children: {
                bag: 'gucci',
            },
        },
        innerProp8: {
            id: 10,
            toggle: true,
            name: 'hello',
            children: {
                veryDeep: {
                    theAnswer: 42,
                    movie: "Hitchiker's Guide to the Galaxy",
                }
            },
        },
        innerProp9: {
            id: 11,
            toggle: false,
            name: 'hello',
            children: {},
            inputField: {
                valid: true,
                value: 'password',
            }
        }
    }
}

module.exports = state