export default function Home() {
  return (
    <div>
      <h1>Vamos sortear um valor do dado</h1>
      <div class="dice">
        <ol class="die-list" data-roll="1" id="die-1">
            <li class="die-item" data-side="1">
                <span class="dot"></span>
            </li>
            <li class="die-item" data-side="2">
                <span class="dot"></span>
                <span class="dot"></span>
            </li>
            <li class="die-item" data-side="3">
                <span class="dot"></span>
                <span class="dot"></span>
                <span class="dot"></span>
            </li>
            <li class="die-item" data-side="4">
                <span class="dot"></span>
                <span class="dot"></span>
                <span class="dot"></span>
                <span class="dot"></span>
            </li>
            <li class="die-item" data-side="5">
                <span class="dot"></span>
                <span class="dot"></span>
                <span class="dot"></span>
                <span class="dot"></span>
                <span class="dot"></span>
            </li>
            <li class="die-item" data-side="6">
                <span class="dot"></span>
                <span class="dot"></span>
                <span class="dot"></span>
                <span class="dot"></span>
                <span class="dot"></span>
                <span class="dot"></span>
            </li>
        </ol>
    </div>
    <button onclick="sortDice()">Rodar dado</button>

    <footer>
        Criado com 💜 <a href="http://github.com/hylansilva">Hylan Silva</a>
    </footer>
    </div>
  )
}
