'use strict';

function handleTableClick(event) {
	const header = document.getElementsByClassName('prop__name');
	
	for(let item of header){
		if(item === event.target){
			
			if(event.target.dataset.dir === undefined || event.target.dataset.dir === '-1'){
				event.target.dataset.dir = 1;
			}else{
				event.target.dataset.dir = -1;
			}
			
			event.currentTarget.dataset.sortBy = event.target.dataset.propName;
			
			sortTable(event.target.dataset.propName, event.target.dataset.dir)
		}
	}
	
}
