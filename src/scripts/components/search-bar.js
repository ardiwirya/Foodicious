class SearchBar extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  set clickEvent(event) {
    this._clickEvent = event;
    this.render();
  }

  get value() {
    return this.querySelector("#searchElement").value;
  }

  set value(value) {
    this.querySelector("#searchElement").value = value;
  }

  render() {
    this.innerHTML = `
          <div id="search-container" class="search-container">
            <input type="search" name="search" id="searchElement", placeholder="search for your favorite dish...">
            <button type="submit" id="searchButton">
            <i id="search-icon" class="fa-solid fa-magnifying-glass fa-lg"></i>
            </button>
          </div>
          `;

    this.querySelector("#searchButton").addEventListener(
      "click",
      this._clickEvent
    );

    const searchIcon = this.querySelector("#search-icon");
    searchIcon.addEventListener("mouseover", () => {
      searchIcon.classList.add("fa-beat");
    });
    searchIcon.addEventListener("mouseout", () => {
      searchIcon.classList.remove("fa-beat");
    });
  }
}

customElements.define("search-bar", SearchBar);
