new Vue({
	el: '#notes',
	data: {
		notes: [
			{id: 0, text: 'Google Search', link: 'http://google.com', favic: "https://www.google.com.ua/images/branding/product/ico/googleg_lodp.ico"},
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
			this.notes.unshift(newItem);
			this.updateStorage();
			this.notes = JSON.parse(localStorage.getItem('notes'));
		},
		showModal(){
			let that = this;
			chrome.tabs.getSelected(null,function(tab) {
				console.log(tab)
    			that.newNoteData.link = tab.url;
    			that.newNoteData.text = tab.title;
    			if(tab.favIconUrl){
    				that.newNoteData.favic = tab.favIconUrl;
    				console.log(tab.favIconUrl)
    			}
    			that.isModal = true;
			});
		},
		updateStorage(){
			let jNotes = JSON.stringify(this.notes);
			localStorage.setItem('notes', jNotes)
		},
		deleteNote(data, alldata){
      		for(var i=0; i<alldata.length; i++){
        		if(alldata[i].id == data.id){
          			alldata.splice(i, 1)
          			this.updateStorage();
        		}
      		}
   		},
   		getShortText(text){
   			let a = text;
   			a = a.slice(0, 45);
   			if(text.length>45){
   				a += '...'
   			}
   			return a
   		},
   		newNoteCheck(data){
      		if(data.text && data.link != ''){
        		this.newNote();
        		this.isModal = false;
        		data.text = '';
        		data.link = '';
      	}}}
		})