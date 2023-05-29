import {ReactNode} from "react";

type Props<T> = {
    value?: T | null
    children: (value: T | null) => ReactNode
}

function GenericComponent<T = unknown>({ value = null, children }: Props<T>) {
    return (
        <>
            <pre>{children(value)}</pre>
        </>
    )
}

export default GenericComponent
