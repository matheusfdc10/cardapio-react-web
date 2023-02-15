export function formatarParagrafo(texto) {
    const linhas = texto.split("\n"); // divide o texto em um array de linhas
    const paragrafos = linhas.map((linha, index) => (
      <p key={index}>
        {linha}
        <br /> {/* adiciona uma quebra de linha dentro do parágrafo */}
      </p>
    ));
    return paragrafos;
}