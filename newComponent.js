Vue.component('new',{
	template: `
	<div class="is-active modal">
  <div class="modal-background"></div>
  <div class="modal-content">
  <div class="field">
    <p class="control">
    <input @keyup.enter='newNote(data)' v-model="data.text" class="input" type="text" placeholder="Name">
  </p>
  </div>
  <div class="field">
  <p class="control">
    <input @keyup.enter='newNote(data)' v-model="data.link" class="input" type="text" placeholder="Link">
  </p>
  </div>
  <div class="field">
    <button @click="newNote(data)" class="button is-success">Create new note</button>
  </div>
  </div>
  <button @click="$emit('close')" class="modal-close is-large"></button>
</div>
	`,
  props: ['data'],
  methods: {
    newNote(data){
      if(data.text && data.link != ''){
        this.$emit('new-note');
        this.$emit('close')
        data.text = '';
        data.link = '';
      }
    }
  }
})