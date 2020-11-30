/* globals, fetch, moment */

const remindersApiUrl= "http://localhost:3000/notes/"
const form = document.querySelector('#reminders-writing-container')

let loadedReminders = []
let updatedReminder = null

function displayReminders(reminders) {
    const savedRemindersList = document.querySelector('#saved-reminders-list')
    savedRemindersList.innerHTML = ""
    console.log(savedRemindersList)
    for (let reminder of reminders) {
        console.log(reminder)
        const reminderElement = document.createElement('div')
        reminderElement.classList.add("reminder")
        const title = document.createElement('h3')
        title.innerText = reminder.title
        reminderElement.appendChild(title)
        const body = document.createElement('p')
        body.innerText = reminder.body
        reminderElement.appendChild(body)
        savedRemindersList.appendChild(reminderElement)
        const deleteButton = document.createElement('button')
        deleteButton.innerText = "Delete"
        deleteButton.addEventListener('click', function(event) {
            event.preventDefault()
            deleteReminder(reminder.id)
        })
        deleteButton.classList.add('delete-button')
        reminderElement.appendChild(deleteButton)
        const updateButton = document.createElement('button')
        updateButton.innerText = "Update"
        updateButton.classList.add("update-button")
        updateButton.addEventListener('click', function(event) {
            event.preventDefault()
            const submitButton = document.querySelector('#submit-button')
            submitButton.innerText = 'Update Reminder'
            updatedReminder = reminder
            document.querySelector('#reminders-title').value = reminders.title
            document.querySelector('#reminders-body').value = reminders.body
            //document.querySelector('#reminders-date').value = reminders.date
        })
        reminderElement.appendChild(updateButton)
        const dateStamp = document.createElement('div')
        dateStamp.id = '#reminders-date'
        //dateStamp.innerText = "Created on" + " " + reminders.created_at
        reminderElement.appendChild(dateStamp)
    }
}

function getAllReminders() {
    fetch(remindersApiUrl)
    .then(function(response) {
        return response.json()
    })
    .then(function(reminders) {
        loadedReminders = reminders
        displayReminders(loadedReminders)
    })
}

function addReminder(title, body, created_at) {
    fetch(remindersApiUrl, {
        method: 'POST',
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify({"title": title, "body": body, "created_at": moment().format("MM Do YYYY")})
    })
    .then(r => r.json())
    .then(function(reminders) {
        console.log(reminders)
        loadedReminders.push(reminders)
        displayReminders(loadedReminders)
    })
}

function deleteReminder(id) {
    fetch(`${remindersApiUrl}${id}`, {
        method: 'DELETE',
        headers: {'Content-Type': 'application/json'},
    })
    .then(function(response){
        return response.json()
    })
    .then(function() {
        const reminderIndexToRemove = loadedReminders.indexOf(reminderIndexToRemove)
        loadedReminders.splice(reminderIndexToRemove, 1)
        displayReminders(loadedReminders)
    })
}

function updateReminder(id, title, body) {
    console.log(id, title, body)
    fetch(`${remindersApiUrl}${id}`, {
        method: "PATCH",
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({'title': title, 'body': body, 'created_at': moment().format()})
    })
    .then(function(response) {
        return response.json()
    })
    .then(function(updatedReminder) {
        const reminderToUpdate = loadedReminders.find(function(reminder) {
            return reminder.id === updatedReminder,
            displayReminders(loadedReminders)
        })
    })
}
function monthNumberToString(month) {
    if (month === 0) {
        return "Jan"
    } else if (month === 1) {
        return "Feb"
    } else if (month === 2) {
        return "Mar"
    } else if (month === 3) {
        return "Apr"
    } else if (month === 4) {
        return "May"
    } else if (month === 5) {
        return "Jun"
    } else if (month === 6) {
        return "Jul"
    } else if (month === 7) {
        return "Aug"
    } else if (month === 8) {
        return "Sept"
    } else if (month ===9) {
        return "Oct"
    } else if (month === 10) {
        return "Nov"
    } else if (month === 11) {
        return "Dec"
    }
}

form.addEventListener('submit', function(event) {
    event.preventDefault()
    const title = document.querySelector('#reminders-title').value
    const body = document.querySelector('#reminders-body').value
    console.log(title,body)
    if (updatedReminder) {
        updateReminder(updatedReminder.id, title, body)
    } else {
        addReminder(title,body)
    }
    document.querySelector('#reminders-title').value = ""
    document.querySelector('#reminders-body').value = ""
    document.querySelector('#submit-button').innerHTML = "Create Reminder"
    updatedReminder = null
})

getAllReminders()