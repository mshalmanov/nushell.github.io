import type { SidebarConfig } from '@vuepress/theme-default';
import { commandCategories } from './command_categories';

export const sidebarEn: SidebarConfig = {
  '/book/': [
    {
      text: 'Introduction',
      link: '/book/README.md',
      collapsible: false,
    },
    {
      text: 'Installation',
      link: '/book/installation.md',
      collapsible: false,
      children: ['/book/default_shell.md'],
    },
    {
      text: 'Getting Started',
      link: '/book/getting_started.md',
      collapsible: false,
      children: [
        '/book/quick_tour.md',
        '/book/moving_around.md',
        '/book/thinking_in_nu.md',
        '/book/cheat_sheet.md',
      ],
    },
    {
      text: 'Nu Fundamentals',
      link: '/book/nu_fundamentals.md',
      collapsible: false,
      children: [
        '/book/types_of_data.md',
        '/book/loading_data.md',
        '/book/pipelines.md',
        '/book/working_with_strings.md',
        '/book/working_with_lists.md',
        '/book/working_with_records.md',
        '/book/working_with_tables.md',
        '/book/navigating_structured_data.md',
      ],
    },
    {
      text: 'Programming in Nu',
      link: '/book/programming_in_nu.md',
      collapsible: false,
      children: [
        '/book/custom_commands.md',
        '/book/aliases.md',
        '/book/operators.md',
        '/book/variables.md',
        '/book/control_flow.md',
        '/book/scripts.md',
        {
          text: 'Modules',
          link: '/book/modules.md',
          collapsible: false,
          children: [
            '/book/modules/using_modules.md',
            '/book/modules/creating_modules.md',
          ],
        },
        '/book/overlays.md',
        '/book/testing.md',
        '/book/style_guide.md',
      ],
    },
    {
      text: 'Nu as a Shell',
      link: '/book/nu_as_a_shell.md',
      collapsible: false,
      children: [
        '/book/configuration.md',
        '/book/environment.md',
        '/book/stdout_stderr_exit_codes.md',
        '/book/escaping.md',
        '/book/3rdpartyprompts.md',
        '/book/shells_in_shells.md',
        '/book/line_editor.md',
        '/book/custom_completions.md',
        '/book/externs.md',
        '/book/coloring_and_theming.md',
        '/book/hooks.md',
        '/book/background_task.md',
      ],
    },
    {
      text: 'Coming to Nu',
      link: '/book/coming_to_nu.md',
      collapsible: false,
      children: [
        '/book/coming_from_bash.md',
        '/book/coming_from_cmd.md',
        '/book/nushell_map.md',
        '/book/nushell_map_imperative.md',
        '/book/nushell_map_functional.md',
        '/book/nushell_operator_map.md',
      ],
    },
    {
      text: 'Design Notes',
      link: '/book/design_notes.md',
      collapsible: false,
      children: ['/book/how_nushell_code_gets_run.md'],
    },
    {
      text: '(Not So) Advanced',
      link: '/book/advanced.md',
      collapsible: false,
      children: [
        '/book/standard_library.md',
        '/book/dataframes.md',
        '/book/metadata.md',
        '/book/creating_errors.md',
        '/book/parallelism.md',
        '/book/plugins.md',
        '/book/explore.md',
      ],
    },
  ],
  '/commands/': [
    {
      text: 'Categories',
      collapsible: false,
      children: commandCategories,
    },
  ],
  '/contributor-book/': [
    {
      text: 'Contributor Book',
      link: '/contributor-book/README.md',
      collapsible: false,
      children: [
        '/contributor-book/README.md',
        '/contributor-book/philosophy',
        '/contributor-book/philosophy_0_80',
        '/contributor-book/commands',
        '/contributor-book/plugins',
        '/contributor-book/plugin_protocol_reference',
      ],
    },
  ],
  '/cookbook/': [
    {
      text: 'Cookbook',
      collapsible: false,
      children: [
        '/cookbook/README.md',
        '/cookbook/setup',
        '/cookbook/help',
        '/cookbook/system',
        '/cookbook/parsing',
        '/cookbook/foreign_shell_scripts',
        '/cookbook/pattern_matching',
        '/cookbook/external_completers',
        '/cookbook/modules',
        '/cookbook/files',
        '/cookbook/git',
        '/cookbook/parsing_git_log',
        '/cookbook/input_listen_keys',
        '/cookbook/http',
        '/cookbook/direnv',
        '/cookbook/ssh_agent',
        '/cookbook/tables',
        '/cookbook/polars_v_pandas_v_nushell',
        '/cookbook/jq_v_nushell',
      ],
    },
  ],
  '/lang-guide/': [
    {
      text: 'Language Reference Guide',
      link: '/lang-guide/README.md',
      collapsible: false,
      children: [
        '/lang-guide/README.md',
        {
          text: 'Types in the Nu Language',
          link: '/lang-guide/chapters/types/00_types_overview.md',
          collapsible: true,
          children: [
            {
              text: 'Basic Types',
              link: '/lang-guide/chapters/types/basic_types/00_basic_types.md',
              collapsible: true,
              children: [
                '/lang-guide/chapters/types/basic_types/any.md',
                '/lang-guide/chapters/types/basic_types/bool.md',
                '/lang-guide/chapters/types/basic_types/int.md',
                '/lang-guide/chapters/types/basic_types/float.md',
                '/lang-guide/chapters/types/basic_types/filesize.md',
                '/lang-guide/chapters/types/basic_types/duration.md',
                '/lang-guide/chapters/types/basic_types/datetime.md',
                '/lang-guide/chapters/types/basic_types/range.md',
                '/lang-guide/chapters/types/basic_types/string.md',
                '/lang-guide/chapters/types/basic_types/record.md',
                '/lang-guide/chapters/types/basic_types/list.md',
                '/lang-guide/chapters/types/basic_types/table.md',
                '/lang-guide/chapters/types/basic_types/closure.md',
                '/lang-guide/chapters/types/basic_types/nothing.md',
                '/lang-guide/chapters/types/basic_types/binary.md',
                '/lang-guide/chapters/types/basic_types/glob.md',
                '/lang-guide/chapters/types/basic_types/cellpath.md',
              ],
            },
            {
              text: 'Other Data Types',
              collapsible: true,
              children: [
                {
                  text: 'Types that cannot be used to declare variables',
                  link: '/lang-guide/chapters/types/other_types/00_not_assignable.md',
                  children: ['/lang-guide/chapters/types/other_types/path.md'],
                },
                {
                  text: 'Types which are not declarable',
                  link: '/lang-guide/chapters/types/other_types/01_not_declarable.md',
                  children: [
                    '/lang-guide/chapters/types/other_types/error.md',
                    '/lang-guide/chapters/types/other_types/custom_value.md',
                    '/lang-guide/chapters/types/other_types/block.md',
                  ],
                },
              ],
            },
            '/lang-guide/chapters/types/type_signatures.md',
            '/lang-guide/chapters/types/related_commands.md',
          ],
        },
        '/lang-guide/chapters/operators.md',
        {
          text: 'Flow control',
          link: '/lang-guide/chapters/flow_control/00_flow_control_overview.md',
          collapsible: true,
          children: [
            '/lang-guide/chapters/flow_control/if-else.md',
            '/lang-guide/chapters/flow_control/loop.md',
            '/lang-guide/chapters/flow_control/while.md',
            '/lang-guide/chapters/flow_control/match.md',
            '/lang-guide/chapters/flow_control/try-catch.md',
            '/lang-guide/chapters/flow_control/break.md',
            '/lang-guide/chapters/flow_control/return.md',
            '/lang-guide/chapters/flow_control/continue.md',
          ],
        },
        {
          text: 'Filters',
          link: '/lang-guide/chapters/filters/00_filters_overview.md',
          collapsible: true,
          children: [
            '/lang-guide/chapters/filters/each-par-each.md',
            '/lang-guide/chapters/filters/selecting_data.md',
            '/lang-guide/chapters/filters/where-filter.md',
            '/lang-guide/chapters/filters/select-get.md',
          ],
        },
        '/lang-guide/chapters/custom_commands.md',
        '/lang-guide/chapters/declarations.md',
        '/lang-guide/chapters/variable_scope.md',
        '/lang-guide/chapters/strings_and_text.md',
        '/lang-guide/chapters/helpers_and_debugging.md',
        '/lang-guide/chapters/pipelines.md',
        '/lang-guide/chapters/mime_types.md',
      ],
    },
  ],
};
