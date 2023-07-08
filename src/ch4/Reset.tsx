import { memo } from 'react';

type ResetProps = {
    onClick: () => void
}

const Reset = memo(({ onClick }: ResetProps) => {
    return <button onClick={onClick}> Reset! </button>
})

export default Reset;