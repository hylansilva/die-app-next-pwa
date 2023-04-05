export default function Home() {
    const sortDice = (): void => {
        const side: number = 6;
        let sort: number = Math.floor(Math.random() * side) + 1;
        const dice: NodeListOf<Element> = document.querySelectorAll(".die-list");
        dice.forEach((die: Element) => {
        die.setAttribute("data-roll", sort.toString());
        });
    };
return (
    <div className="Center">
    <h1>Vamos sortear um valor do dado</h1>
    <div className="dice">
        <ol className="die-list" data-roll="1" id="die-1">
            <li className="die-item" data-side="1">
                <span className="dot"></span>
            </li>
            <li className="die-item" data-side="2">
                <span className="dot"></span>
                <span className="dot"></span>
            </li>
            <li className="die-item" data-side="3">
                <span className="dot"></span>
                <span className="dot"></span>
                <span className="dot"></span>
            </li>
            <li className="die-item" data-side="4">
                <span className="dot"></span>
                <span className="dot"></span>
                <span className="dot"></span>
                <span className="dot"></span>
            </li>
            <li className="die-item" data-side="5">
                <span className="dot"></span>
                <span className="dot"></span>
                <span className="dot"></span>
                <span className="dot"></span>
                <span className="dot"></span>
            </li>
            <li className="die-item" data-side="6">
                <span className="dot"></span>
                <span className="dot"></span>
                <span className="dot"></span>
                <span className="dot"></span>
                <span className="dot"></span>
                <span className="dot"></span>
            </li>
        </ol>
    </div>
    <button onClick={sortDice}>Rodar dado</button>

    <footer>
        Criado com 💜 por: <a href="http://github.com/hylansilva">Hylan Silva</a>
    </footer>
    </div>
)
}
