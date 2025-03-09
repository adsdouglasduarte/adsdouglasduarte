# MJML Email Templates

Este repositório contém templates de e-mails responsivos criados utilizando a biblioteca **MJML**.

## O que é MJML?

[**MJML**](https://mjml.io/) é uma linguagem de marcação desenvolvida para facilitar a criação de e-mails responsivos. Com uma sintaxe simplificada, ele gera automaticamente HTML otimizado para diferentes clientes de e-mail.

## Tecnologias Utilizadas

- **MJML** - Para criação dos templates
- **Plugin MJML** - Para visualização e compilação dos templates

## Instalação

1. Instale o **plugin MJML** na sua IDE (ex: Visual Studio Code).
2. Clone este repositório:
   ```bash
   git clone https://github.com/seu-usuario/nome-do-repositorio.git
   ```
3. Acesse a pasta do projeto:
   ```bash
   cd nome-do-repositorio
   ```

## Como Usar

### 1. Visualizar um Template MJML

Utilize o **preview** do plugin MJML na sua IDE para visualizar o template enquanto o edita.

### 2. Gerar um Arquivo HTML

Execute o seguinte comando para compilar um arquivo **MJML** para **HTML**:
```bash
mjml input.mjml -o output.html
```

## Estrutura do Projeto

```
📂 nome-do-repositorio
├── 📁 templates
│   ├── template1.mjml
│   ├── template2.mjml
├── 📁 output
│   ├── template1.html
│   ├── template2.html
├── README.md
```

## Exemplo de Template MJML

```xml
<mjml>
  <mj-body>
    <mj-section>
      <mj-column>
        <mj-text>
          Este é um exemplo de template criado com MJML.
        </mj-text>
      </mj-column>
    </mj-section>
  </mj-body>
</mjml>
```

## Recursos Úteis

- [Documentação Oficial do MJML](https://documentation.mjml.io/)
- [MJML Playground](https://mjml.io/try-it-live)

## Contribuição

Sinta-se à vontade para contribuir enviando **pull requests** ou abrindo **issues** para sugestões e melhorias.



