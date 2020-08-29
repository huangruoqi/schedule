const hwList = document.querySelector('#checkboxes');


function checkOrUncheck(doc) {
	if (doc.data().isFinished) {
		document.getElementById(doc.data().id).checked = true;
	}

}

db.collection('Homework').get().then((snapshot)=>{
	snapshot.docs.forEach(doc=> {
		checkOrUncheck(doc);
	})
})

const submit = document.getElementById('btn');
submit.addEventListener('click', element=> {
	const cb = document.getElementsByClassName('cb');

	for (var i = 0; i<cb.length;i++) {
		const doc = db.collection('Homework').doc(cb[i].id);
		doc.update({
			'isFinished': cb[i].checked
		})
	}
})