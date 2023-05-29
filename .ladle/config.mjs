export default {
    addons: {
        a11y: {
            enabled: true
        },
        action: {
            enabled: false,
            defaultState: []
        },
        control: {
            enabled: false
        },
        ladle: {
            enabled: false,
        },
        mode: {
            enabled: false,
            defaultState: 'full'
        },
        rtl: {
            enabled: false,
            defaultState: false,
        },
        source: {
            enabled: true,
            defaultState: false
        },
        theme: {
            enabled: true,
            defaultState: 'light'
        },
        width: {
            enabled: true,
            options: {
                xs: 320,
                sm: 400,
                md: 720,
                lg: 1024,
                xl: 1280,
                xxl: 1920,
                max: 2560
            }
        }
    },
}
