// Adding filter function to the work list on portfolio page.

// Define list.
const options = {
  valueNames: ['date', 'tags']
};
const works = new List('works', options);

// Sort list by date.
works.sort('date', { order: 'desc' });

// Filter function.
let currentTags = [];

$('.filter-tag').on('click', function() {
  const tag = $(this).attr('data-filter');
  if($(this).hasClass('active')){
    currentTags.splice(currentTags.indexOf(tag), 1);
    $(this).removeClass('active');
  } else {
    currentTags.push(tag);
    $(this).addClass('active');
  }
  works.filter(function(item) {
    return (currentTags.every(d => item.values().tags.includes(d)));
  })
});

// Clear filters function.
$('.filter-clear').on('click', function() {
  if (currentTags.length != 0) {
    currentTags = [];
    $('.filter-tag').removeClass('active');
    works.filter();
  }
})

// Message on filters with no matches.
works.on('filterComplete', function() {
  if (works.matchingItems.length == 0) {
    works.list.textContent = "No matches found.";
  }
})