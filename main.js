Vue.createApp({
  data() {
    return {
      massage: "Hi",
      header: {
        title: "Niluh Sekar",
        desc: "Seorang mahasiswi program studi Sistem Informasi Universitas Ahmad Dahlan angkatan tahun 2020. Masih sangat baru dalam hal coding, masih perlu banyak belajar dan referensi. Tidak harus terburu buru tidak harus sekarang, perlahan tapi pasti karna hal indah butuh waktu. Life is not about taking what you sow, stay a good person because the things you sow maybe can be replaced by someone else. Stay as a human being who has the principle of --stay a good person even if you are not treated well.--",
        description: "Be beautiful according to your own version.",
        social: {
          ig: {
            url: "https://instagram.com/niluhskrlfa_",
            title: " niluhskrlfa_ ",
          },
          github: {
            url: "https://github.com/niluhsekar12345",
            title: " niluhsekar ",
          },
        },
        imageProfile: "./images/remove.bg.png",
      },
      artikel: [],
      article: null,
    };
  },
  methods: {
    getHeaderData() {
      axios
        .get("https://raw.githubusercontent.com//Niluhsekar12345/tekweb2022/main/contents/headerniluh.json")
        .then((res) => {
          this.header = res.data;
          this.getArticles();
        })
        .catch((error) => {
          console.log(error);
        });
    },
    getArticles() {
      axios
        .get("https://raw.githubusercontent.com//Niluhsekar12345/tekweb2022/main/contents/artikel.json")
        .then((res) => {
          this.artikel = res.data;
        })
        .catch((error) => {
          console.log(error);
        });
    },
    getMarkdown() {
      const queryString = window.location.search;
      const urlParams = new URLSearchParams(queryString);
      const artikel = urlParams.get("article");
      var converter = new showdown.Converter();
      console.log(artikel);
      axios
        .get((src = "https://raw.githubusercontent.com//Niluhsekar12345/tekweb2022/main/contents/" + articles))
        .then((res) => {
          var html = converter.makeHtml(res.data);
          this.article = html;
          console.log(html);
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },

  beforeMount() {
    this.getHeaderData(), this.getArticles(), this.getMarkdown();
  },
}).mount("#app");
