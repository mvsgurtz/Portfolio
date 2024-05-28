export const handleOnMove = (e: React.MouseEvent<HTMLLIElement>) => {
    const card = document.querySelector(".left__animation") as HTMLElement | null;
    const cardHover = document.querySelector(".hover") as HTMLElement | null;
    
    if (!card || !cardHover) {
      console.error("Elementos não encontrados.");
      return;
    }
  
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    cardHover.style.setProperty("--x", `${x}px`);
    cardHover.style.setProperty("--y", `${y}px`);
    
  };