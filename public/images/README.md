# 📸 Como Adicionar Sua Foto ao Portfólio

## Passo 1: Prepare Sua Foto
- **Formato recomendado:** JPG, PNG ou WebP
- **Dimensões ideais:** 280px de largura × 380px de altura (proporção retrato)
- **Tamanho do arquivo:** Máximo 500KB (recomendado < 200KB)
- **Dica:** Use ferramentas como [TinyPNG](https://tinypng.com/) para comprimir

## Passo 2: Salve no Local Correto
1. Coloque seu arquivo na pasta: `public/images/`
2. Nomeie como: `profile.jpg` (ou `profile.png` / `profile.webp`)
3. Caminho completo esperado: `public/images/profile.jpg`

## Passo 3: Configuração
A foto já está configurada automaticamente no arquivo `src/data/content.ts`:
```typescript
photo: "/images/profile.jpg"
```

Se usar outro nome, atualize esta linha com o nome correto.

## Resultado
- ✨ Foto com efeito neon azul
- 🌟 Brilho ao passar o mouse
- 📱 Responsiva (adapta ao tamanho da tela)
- 🎨 Harmonizada com o design do portfólio

## Solução de Problemas
- **Foto não aparece:** Verifique se o caminho em `content.ts` está correto
- **Foto cortada:** Ajuste as dimensões para manter proporção retrato
- **Arquivo muito grande:** Comprima usando TinyPNG ou similar
