/** O sistema jnogxavier. Tudo monta DOM puro: nenhuma biblioteca carrega. */

export interface CasoProps {
  /** Titulo do caso. Uma linha. */
  titulo: string;
  /** Papel e periodo: "DevOps Engineer na BCJ, fevereiro a julho de 2026". Vai em meta. Nao junte itens com ponto do meio. */
  meta?: string;
  /** O que era e por que importava. */
  problema?: string;
  /** Ferramentas, arquitetura e o que foi trocado pelo que. */
  abordagem?: string;
  /** O resultado medido que fecha o caso. No maximo um por caso. */
  resultado?: { valor: string; unidade?: string };
  /** O que quebrou e o que voce faria diferente. Nao e opcional na pratica. */
  aprendizado?: string;
  /** Artefato publico: loja, site no ar, repositorio. */
  links?: Array<{ texto: string; href: string }>;
}

export interface BlocoCodigoProps {
  /** Nome da linguagem, em caixa de frase. Renderiza em meta, nunca em mono. */
  linguagem?: string;
  /** Codigo de verdade. Nao usar para rotulo nem para texto decorativo. */
  codigo: string;
}

export interface EstadoPillProps {
  /** Estado real, nunca enfase. */
  estado: 'saudavel' | 'degradado';
  texto: string;
}

export function Caso(props: CasoProps): HTMLElement;
export function BlocoCodigo(props: BlocoCodigoProps): HTMLElement;
export function EstadoPill(props: EstadoPillProps): HTMLElement;

export interface DiagramaProps {
  /** O SVG do desenho. Use as classes jnx-dg-* dentro dele, nunca cor literal. */
  conteudo: SVGElement | HTMLElement;
  /** O que o leitor deve concluir do desenho, nao a descricao dele. */
  legenda?: string;
}

export interface ContatoProps {
  /** Endereco de e-mail. Renderiza como texto selecionavel, nunca so atras de mailto. */
  email: string;
  /** Pilula de estado. Precisa ser verdade. */
  estado?: EstadoPillProps;
  /** Caminhos alternativos: curriculo em PDF, GitHub, LinkedIn. */
  links?: Array<{ texto: string; href: string }>;
}

export function Diagrama(props: DiagramaProps): HTMLElement;
export function Contato(props: ContatoProps): HTMLElement;
