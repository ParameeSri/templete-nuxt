import Vuex from 'vuex'

const createStore = () => {
  return new Vuex.Store({
    state: {
      articles: [
        // {
        //   title: "New fashion trends",
        //   author: "Rachel L",
        //   category: "Travel",
        //   hero: "umbrella.jpg"
        // },
      ],
      drawer: false,
      items: [
        {
          text: 'หน้าแรก',
          to: '/'
          // href: '#'
        },
        {
          text: 'เกี่ยวกับเรา',
          to: '/signon/about'
          // href: '#'
        },
        {
          text: 'สูตรลับ',
          to: '/signon/secret'
          // href: '#'
        },
        {
          text: 'สาระ',
          to: '/signon/knowlage'
          // href: '#'
        },
        {
          text: 'สินค้า',
          to: '/signon/product'
          // href: '#'
        },
        {
          text: 'ติดต่อ',
          to: '/signon/contact'
          // href: '#'
        }
      ]
    },
    getters: {
      categories: state => {
        const categories = []
  
        for (const article of state.articles) {
          if (
            !article.category ||
            categories.find(category => category.text === article.category)
          ) continue
  
          const text = article.category
  
          categories.push({
            text,
            to: `/category/${text}`
          })
        }
  
        return categories.sort().slice(0, 4)
      },
      links: (state, getters) => {
        return state.items.concat(getters.categories)
      }
    },
    mutations: {
      setDrawer: (state, payload) => (state.drawer = payload),
      toggleDrawer: state => (state.drawer = !state.drawer)
    },
    actions: {
  
    }
  })
}

export default createStore