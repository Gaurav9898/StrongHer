const SHEET_ID = '19Wm3dqs5d6f4AFiEGk7A_g_DGsQ2FrYQ_LWvafFnMbU';
const SHEET_NAME = 'Form Responses';
const HEADERS = [
  'Received At',
  'Email Address',
  'Full Name',
  'Age',
  'City',
  'WhatsApp Number',
  'How did you hear about StrongHer',
  'Primary Goals',
  'Training Experience',
  'Looking For',
  'Health / Diet Notes',
  'Preferred Consultation Date',
  'Preferred Time',
  'Terms Accepted',
  'Source',
  'Submitted At'
];

function doPost(e) {
  const payload = JSON.parse(e.postData.contents || '{}');
  const spreadsheet = SpreadsheetApp.openById(SHEET_ID);
  const sheet = getOrCreateSheet_(spreadsheet);

  sheet.appendRow([
    new Date(),
    payload.email || '',
    payload.fullName || '',
    payload.age || '',
    payload.city || '',
    payload.whatsappNumber || '',
    (payload.heardAbout || []).join(', '),
    (payload.primaryGoals || []).join(', '),
    payload.trainingExperience || '',
    payload.lookingFor || '',
    payload.healthNotes || '',
    payload.consultationDate || '',
    payload.consultationTime || '',
    payload.termsAccepted ? 'Yes' : 'No',
    payload.source || '',
    payload.submittedAt || ''
  ]);

  return ContentService
    .createTextOutput(JSON.stringify({ ok: true }))
    .setMimeType(ContentService.MimeType.JSON);
}

function doGet() {
  return ContentService
    .createTextOutput(JSON.stringify({ ok: true, service: 'StrongHer enquiry form' }))
    .setMimeType(ContentService.MimeType.JSON);
}

function getOrCreateSheet_(spreadsheet) {
  const sheet = spreadsheet.getSheetByName(SHEET_NAME) || spreadsheet.insertSheet(SHEET_NAME);

  if (sheet.getLastRow() === 0) {
    sheet.appendRow(HEADERS);
    return sheet;
  }

  const currentHeaders = sheet.getRange(1, 1, 1, sheet.getLastColumn()).getValues()[0];
  if (currentHeaders[1] !== 'Email Address') {
    sheet.insertColumnBefore(2);
  }

  sheet.getRange(1, 1, 1, HEADERS.length).setValues([HEADERS]);

  return sheet;
}
