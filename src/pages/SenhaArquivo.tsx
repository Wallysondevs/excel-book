import { PageContainer } from "@/components/layout/PageContainer";
import { CodeBlock } from "@/components/ui/CodeBlock";
import { AlertBox } from "@/components/ui/AlertBox";

export default function SenhaArquivo() {
  return (
    <PageContainer title="Senha em arquivos e criptografia" subtitle="Proteção real (não decorativa) com AES-256." difficulty="intermediario" timeToRead="4 min">
      <h2>Como aplicar</h2>
      <ul>
        <li dangerouslySetInnerHTML={{ __html: "<strong>Arquivo → Informações → Proteger Pasta de Trabalho → Criptografar com Senha</strong>" }} />
        <li dangerouslySetInnerHTML={{ __html: "Defina senha (escreva em local seguro — sem reset!)" }} />
        <li dangerouslySetInnerHTML={{ __html: "Salvar" }} />
      </ul>
      <h2>O que muda</h2>
      <ul>
        <li dangerouslySetInnerHTML={{ __html: "Arquivo é criptografado com <strong>AES-256</strong>" }} />
        <li dangerouslySetInnerHTML={{ __html: "Sem a senha, ninguém abre — nem com ferramentas de recuperação" }} />
        <li dangerouslySetInnerHTML={{ __html: "Funciona em Excel Desktop e Online" }} />
      </ul>
      <AlertBox type="danger" title="Sem reset">
        <span dangerouslySetInnerHTML={{ __html: "Microsoft NÃO pode recuperar arquivos com senha perdida. Use gerenciador de senhas." }} />
      </AlertBox>
    </PageContainer>
  );
}
