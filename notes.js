
new Vue({
	el: '#notes',
	data: {
		notes: [
			{id: 0, text: 'bla bla', link: 'bla bla'}, {id: 1, text: 'bla bla', link: 'bla bla'}
		],
		isModal: false,
		newNoteData: {text:'', link: ''}
	},

	created: function() {
		if(!localStorage.getItem('notes')){
			let jNotes = JSON.stringify(this.notes);
			localStorage.setItem('notes', jNotes)
		} 
		else this.notes = JSON.parse(localStorage.getItem('notes'))
	},

	methods: {
		newNote() {
			if(localStorage.getItem('id')){
				this.newNoteData.id = +localStorage.getItem('id') + 1;
				localStorage.setItem('id', +localStorage.getItem('id') + 1);
			}
			else{
				localStorage.setItem('id', 3);
				this.newNoteData.id = +localStorage.getItem('id');
			}
			let newItem = this.newNoteData;
			console.log(newItem.id);
			this.notes.push(newItem);
			this.updateStorage();
			this.notes = JSON.parse(localStorage.getItem('notes'));
		},
		showModal(){
			isModal = true;
		},
		updateStorage(){
			let jNotes = JSON.stringify(this.notes);
			localStorage.setItem('notes', jNotes)
		}
	}
})