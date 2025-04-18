ps | where cpu > 5
# => ╭───┬───────┬───────┬─────────────────────────────────────────┬─────────┬───────┬──────────┬──────────╮
# => │ # │  pid  │ ppid  │                  name                   │ status  │  cpu  │   mem    │ virtual  │
# => ├───┼───────┼───────┼─────────────────────────────────────────┼─────────┼───────┼──────────┼──────────┤
# => │ 0 │ 86759 │ 86275 │ nu                                      │ Running │  6.27 │  38.7 MB │ 419.7 GB │
# => │ 1 │ 89134 │     1 │ com.apple.Virtualization.VirtualMachine │ Running │ 23.92 │   1.5 GB │ 427.3 GB │
# => │ 2 │ 70414 │     1 │ VTDecoderXPCService                     │ Sleep   │ 19.04 │  17.5 MB │ 419.7 GB │
# => │ 3 │  2334 │     1 │ TrackpadExtension                       │ Sleep   │  7.47 │  25.3 MB │ 418.8 GB │
# => │ 4 │  1205 │     1 │ iTerm2                                  │ Sleep   │ 11.92 │ 657.2 MB │ 421.7 GB │
# => ╰───┴───────┴───────┴─────────────────────────────────────────┴─────────┴───────┴──────────┴──────────╯
