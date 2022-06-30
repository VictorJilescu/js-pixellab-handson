$(function () {
  $('#personForm')
    .on('submit', function (event) {
      event.preventDefault();
      // imbracam obiectul DOM in object jQuery
      const $form = $(this);
      // folosim obiectul de DOM ca   argument
      const formData = new FormData(this);
      const $detailsFieldset = $('#personForm fieldset:nth-child(2)');

      $detailsFieldset.append(renderPerson(formData));

      $form.after(renderData(formData));
    })
    .find('fieldset:nth-child(2)')
    .append(renderSkillControls());

  // hoisting
  // doar pentru function
  function renderPerson(formData) {
    const name = formData.get('name');
    const surname = formData.get('surname');
    const age = formData.get('age');

    const $person = $('<p>', {
      text: `${name} ${surname}: ${age}`,
    });

    return $person;
  }

  function renderData(formData) {
    const $container = $('<div>', {
      class: 'personDisplay',
    });

    $container.append(renderPerson(formData)).append(renderSkills(formData));

    return $container;
  }

  function renderSkills(formData) {
    const iterator = formData.entries();
    const objectData = Object.fromEntries(iterator);

    const keys = Object.keys(objectData);
    const skillsArray = [];

    for (let i = 0; i < keys.length; i++) {
      const keyName = keys[i];

      if (keyName === 'skill-input') {
        continue;
      }

      skillsArray.push(objectData[keyName]);
    }

    const $p = $('<p>', {
      text: `Skills: ${skillsArray}`,
    });

    return $p;
  }

  function renderSkillControls() {
    function renderSkillUl(skill) {
      const skillsClassName = 'renderSkillUl';
      let $ul = $(`.${skillsClassName}`);

      if ($ul.length <= 0) {
        $ul = $('<ul>', {
          class: '',
        });
      }

      $('<li>', {
        text: skill,
      })
        .append(
          $('<button>', {
            type: 'button',
            text: '-',
            class: 'removeSkillButton',
            title: 'Elimina Skill',
          }),
        )
        .append(
          $('<input>', {
            type: 'hidden',
            name: `skill-${skill}`,
            value: skill,
          }),
        )
        .appendTo($ul);

      return $ul;
    }

    const $skillInput = $('<input>', {
      placeholder: 'Skill',
      type: 'text',
      name: 'skill-input',
    });

    const $addButton = $('<button>', {
      text: 'Adauga Skill',
      title: 'Adauga Skill',
      type: 'button',
    }).on('click', function () {
      const $button = $(this);
      const inputValue = $button.prev().val().trim();

      if (inputValue.length < 1) {
        return;
      }

      $button.after(renderSkillUl(inputValue));

      $button.prev().val('');
    });

    const $container = $('<div>').append($skillInput).append($addButton);

    return $container;
  }
});
