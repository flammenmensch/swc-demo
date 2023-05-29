import GenericComponent from "./GenericComponent.tsx";

export const Case = () => (
    <>
        <GenericComponent<number>>
            {(value) => (value)}
        </GenericComponent>
        <GenericComponent<string> value='123'>
            {(value) => (value)}
        </GenericComponent>
        <GenericComponent<boolean> value={false}>
            {(value) => (value)}
        </GenericComponent>
    </>
)
