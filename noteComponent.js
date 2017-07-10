Vue.component('note',{
	template: `
	<div class="column is-4 is-12-mobile note">
	<div class="card">
  <div class="card-content">
    <p class="noteText">
    	<a :href="data.link" v-text="data.text"></a>	
    </p>
    <p class="subtitle">
    <a class="noteLink" :href="data.link">{{data.link}}</a>
    </p>
  </div>
  <footer class="card-footer">
    <p class="card-footer-item">
      <span>
        <a @click="deleteNote(data, alldata)" href="#">Delete</a>
      </span>
    </p>
  </footer>
	</div>
	</div>
	`,
	props: ['data', 'alldata'],
  methods: {
    deleteNote(data, alldata){
      for(var i=0; i<alldata.length; i++){
        if(alldata[i].id == data.id){
          console.log(alldata[i].id + '' + data.id)
          alldata.splice(i, 1)
          this.$emit('update-storage');
        }
      }
    }
  }
})