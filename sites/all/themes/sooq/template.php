<?php


drupal_add_js(array('igniter' => array('pathToTheme' => path_to_theme())), 'setting');

/*
function sooq_preprocess_views_view(&$vars) {

  if (isset($vars['view']->field)) {
    $field = $vars['view']->field;
    dpm($field);
    if ($field['field_media']) {
      $field['field_media']->options['element_class'] = 'test';
    }
  }
}
*/


function sooq_preprocess_views_view_fields(&$vars) {
  $vars['fields']['field_media']->class .= ' grid_2';
  $vars['fields']['title']->class .= ' grid_3';
  $vars['fields']['field_category']->class .= ' grid_3';
  $vars['fields']['field_subcategory']->class .= ' grid_3';
  $vars['fields']['created']->class .= ' grid_3';
  $vars['fields']['field_price']->class .= ' grid_2';
}