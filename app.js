const hwList = document.querySelector('#checkboxes');


function checkOrUncheck(doc) {
	if (doc.data().isFinished) {

		const cb = document.getElementById(doc.data().id);
		cb.checked = true;
		cb.disabled = true;

	}

}

db.collection('Homework').get().then((snapshot)=>{
	snapshot.docs.forEach(doc=> {
		checkOrUncheck(doc);
	})
})

const submit = document.getElementById('submitButton');
submit.addEventListener('click', element=> {
	const cb = document.getElementsByClassName('cb');

	for (var i = 0; i<cb.length;i++) {
		const doc = db.collection('Homework').doc(cb[i].id);
		if (cb[i].checked) {
			cb[i].disabled = true;
		}
		doc.update({
			'isFinished': cb[i].checked
		})
	}
})
const clear = document.getElementById('clearButton');
clear.addEventListener('click', element=> {
	const cb = document.getElementsByClassName('cb');
	for (var i =0;i<cb.length;i++) {
		cb[i].disabled = false;
		cb[i].checked = false;
	}
})