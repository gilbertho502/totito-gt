import { Square } from "./Square"

// eslint-disable-next-line react/prop-types
function WinnerModal  ({winner, resetGame}) {

    if (winner === null) return null
    const winnerText = winner === false ? 'Empate' : 'Gano :'
    return (
        <section className="winner">
            <div>
                <h2>{winnerText}</h2>
                <header className="win">
                    {winner && <Square>{winner}</Square>}
                </header>
                <footer>
                    <button onClick={resetGame}>Empezar de nuevo</button>
                </footer>
            </div>
        </section>
    )
}

export {WinnerModal}