document.addEventListener('DOMContentLoaded', function () {
  const colorSelect = document.getElementById('colorSelect');
  const selectAndRemoveButton = document.querySelector('input[type="button"]');

  // Event listener for the button click
  selectAndRemoveButton.addEventListener('click', function () {
    // Get the selected option
    const selectedOption = colorSelect.options[colorSelect.selectedIndex];
    
    if (selectedOption) {
      // Remove the selected option from the dropdown
      colorSelect.removeChild(selectedOption);
    }
  });
});
