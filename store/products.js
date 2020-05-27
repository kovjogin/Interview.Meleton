export const state = () => ({
  items: []
});

export const mutations = {
  setList: (state, value) => (state.items = value)
};

function compareByDate(a, b) {
  const time_a = new Date(a.created_at).getTime();
  const time_b = new Date(b.created_at).getTime();
  return compareNumbers(time_a, time_b);
}

function compareByPrice(a, b) {
  return compareNumbers(a.price, b.price);
}

function compareNumbers(a, b) {
  if (a < b) {
    return -1;
  }
  if (a > b) {
    return 1;
  }
  return 0;
}

export const getters = {
  getList: state => ({
    sortField = 'price',
    sortDirection = 'desc',
    perPage = 2,
    currentPage = 1
  }) => {
    let items = state['items'];
    items = [...items].sort(
      sortField === 'price' ? compareByPrice : compareByDate
    );
    items = sortDirection === 'desc' ? items.reverse() : items;

    const startIndex = (currentPage - 1) * perPage;
    const endIndex = startIndex + perPage;

    return items.slice(startIndex, endIndex);
  },

  getPaginate: state => ({ perPage = 2, currentPage = 1 }) => {
    const totalItems = state['items'].length;
    return {
      currentPage,
      perPage,
      totalPages: Math.ceil(totalItems / perPage)
    };
  },

  getItem: state => id => {
    return state['items'].find(item => parseInt(item.id) === parseInt(id));
  }
};

export const actions = {
  createItem: function({ state, commit }, form) {
    const oldData = [...state.items].sort((a, b) => compareNumbers(a.id, b.id));
    const lastId = oldData[oldData.length - 1].id;
    commit('setList', [...oldData, { ...form, id: lastId + 1 }]);
  },

  editItem: ({ state, commit }, {id, form}) => {
    const newList = state['items'].map(item => {
      return parseInt(id) === parseInt(item.id) ? { ...form, id: id } : item;
    });

    commit('setList', newList);
  },

  removeItem: ({ state, commit }, id) => {
    const newList = state['items'].filter(item => {
      return parseInt(id) !== parseInt(item.id);
    });

    commit('setList', newList);
  }
};
