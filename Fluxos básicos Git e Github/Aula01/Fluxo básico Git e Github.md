
---

# Fluxo Básico entre Git e GitHub

O Git é um sistema de controle de versão distribuído amplamente utilizado para rastrear alterações em arquivos de código-fonte durante o desenvolvimento de software. O GitHub é uma plataforma de hospedagem de código-fonte baseada na web que utiliza o Git para controle de versão e colaboração em projetos.

## Fluxo Básico

1. **Clonar um repositório:**
   - Para iniciar um novo projeto ou contribuir para um existente, você clona um repositório Git do GitHub para o seu computador local usando o comando `git clone`.

   ```bash
   git clone https://github.com/usuario/nome-do-repositorio.git
   ```

2. **Criar uma nova branch:**
   - Antes de começar a trabalhar em uma nova funcionalidade ou correção de bug, você cria uma nova branch para isolar suas alterações do restante do projeto.

   ```bash
   git checkout -b minha-nova-branch
   ```

3. **Fazer alterações e commit:**
   - Você faz suas alterações nos arquivos do projeto e as adiciona ao índice do Git (staging area) usando o comando `git add`. Em seguida, você commita as alterações para a sua branch local usando `git commit`.

   ```bash
   git add .
   git commit -m "Mensagem descritiva das alterações"
   ```

4. **Push para o GitHub:**
   - Após fazer commit das suas alterações, você envia as mudanças para o repositório remoto no GitHub usando o comando `git push`.

   ```bash
   git push origin minha-nova-branch
   ```

5. **Criar um Pull Request (PR):**
   - No GitHub, você abre um Pull Request para solicitar a integração das suas alterações na sua branch para a branch principal do repositório (por exemplo, `main` ou `master`).

6. **Revisão e Merge:**
   - Outros colaboradores revisam suas alterações no Pull Request e, se estiverem satisfeitos, eles fazem o merge das suas alterações na branch principal do repositório.

7. **Atualizar a branch local:**
   - Depois que suas alterações forem mescladas, você pode atualizar sua branch local com as alterações da branch principal usando o comando `git pull`.

   ```bash
   git pull origin main
   ```

8. **Excluir a branch (opcional):**
   - Se a sua branch não for mais necessária, você pode excluí-la localmente e no repositório remoto.

   ```bash
   git branch -d minha-nova-branch
   git push origin --delete minha-nova-branch
   ```

## Conclusão

O fluxo básico entre Git e GitHub envolve clonar um repositório, criar uma nova branch, fazer alterações, commitar e enviar as alterações para o GitHub, abrir um Pull Request, revisar e mesclar as alterações, e, por fim, atualizar a branch local. Este fluxo é fundamental para colaboração e gerenciamento de versões em projetos de desenvolvimento de software.

---
