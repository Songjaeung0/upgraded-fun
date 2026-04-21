(() => {
  const yearEl = document.querySelector("[data-year]");
  if (yearEl) yearEl.textContent = String(new Date().getFullYear());

  const copyButtons = document.querySelectorAll("[data-copy]");
  copyButtons.forEach((btn) => {
    btn.addEventListener("click", async () => {
      const text = btn.getAttribute("data-copy") || "";
      try {
        await navigator.clipboard.writeText(text);
        btn.textContent = `${text} (복사됨)`;
        window.setTimeout(() => {
          btn.textContent = `${text} (클릭하면 복사)`;
        }, 1200);
      } catch {
        alert("복사에 실패했어. 이메일을 직접 선택해서 복사해줘.");
      }
    });
  });

  const filterButtons = document.querySelectorAll("[data-filter]");
  const grid = document.querySelector("[data-grid]");
  if (grid && filterButtons.length) {
    const items = Array.from(grid.querySelectorAll(".work"));

    const setActive = (activeBtn) => {
      filterButtons.forEach((b) => b.classList.remove("is-active"));
      activeBtn.classList.add("is-active");
    };

    const apply = (tag) => {
      items.forEach((item) => {
        const tags = (item.getAttribute("data-tags") || "").split(/\s+/).filter(Boolean);
        const visible = tag === "all" ? true : tags.includes(tag);
        item.style.display = visible ? "" : "none";
      });
    };

    filterButtons.forEach((btn) => {
      btn.addEventListener("click", () => {
        const tag = btn.getAttribute("data-filter") || "all";
        setActive(btn);
        apply(tag);
      });
    });
  }

  const modal = document.querySelector("[data-lightbox-modal]");
  const modalImg = modal?.querySelector(".lightbox__img");
  const modalCap = modal?.querySelector(".lightbox__cap");
  const closeEls = modal?.querySelectorAll("[data-lightbox-close]") || [];

  const open = (imgEl, caption) => {
    if (!modal || !modalImg || !modalCap) return;
    modalImg.src = imgEl.src;
    modalImg.alt = imgEl.alt || "";
    modalCap.textContent = caption || "";
    modal.classList.add("is-open");
    modal.setAttribute("aria-hidden", "false");
    document.body.style.overflow = "hidden";
  };

  const close = () => {
    if (!modal) return;
    modal.classList.remove("is-open");
    modal.setAttribute("aria-hidden", "true");
    document.body.style.overflow = "";
  };

  closeEls.forEach((el) => el.addEventListener("click", close));
  window.addEventListener("keydown", (e) => {
    if (e.key === "Escape") close();
  });

  document.querySelectorAll("[data-lightbox]").forEach((wrap) => {
    wrap.addEventListener("click", (e) => {
      const img = e.target.closest("img");
      if (!img) return;
      const figure = img.closest("figure");
      const cap = figure?.querySelector("figcaption")?.textContent?.trim() || "";
      open(img, cap);
    });
  });
})();
