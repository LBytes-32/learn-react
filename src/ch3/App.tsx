import { Alert } from './Alert'

function App() {
    
    // "closable" is a boolean.
    // You may specify it to represent "true"
    // You may also specify "closable={true}"
    
    return (
        <div>
            <Alert heading='Warning' closable type="warning">
                This application looks terrible.
            </Alert>
        </div>
    )
}

export default App;