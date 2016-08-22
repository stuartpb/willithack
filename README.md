# willithack

A page that describes the feasibility of using certain domain names.

## Project background / status

This was a site I was putting together that would allow you to enter a domain and get information back on whether it would be possible to register it, based on the top-level domain's restrictions. The hard part was in structuring the data for these restrictions, which I was attempting to put together manually in tlds.yaml (described below).

These days, if I want to see what registering a domain would entail, I just enter the domain hack I'm thinking of on [domcomp](https://www.domcomp.com/), and it tells me not only if the domain is registerable or not, but *how much* it would cost to register, and what some *other potential options* could be. As such, this project is now, for all practical purposes, superfluous, and will probably be "pivoted" to something completely different with the same name at some point in the future

## tlds.yaml structure

### .intendeduse

This field is not present on cctld objects: it's presumed they were intended for entities connect with the country the TLD is a code for.

### .restrictions

#### .content

Restrictions on what content may be served under the domain.

#### .registrant

Restrictions on who may register domains.

### .structure

The "structure" value can be:

#### "open"

structure: "open" is shorthand for structure: {second: {open: true}}.

#### .second, .third

Meaning that, apart from any content restrictions listed in "restrictions", the registrar allows any regitrations on the second level, under the TLD.

#### object with .second and .third

These describe avilability at the second and third level.

second: "open" is shorthand for second: {open: true}.

If the second has an object with a .notes field, it is to be interpreted as "mostly open" with the notes explaining how it is mostly open.

The "third" can have a .domains object describing second-level domains that have restrictions.

Either of these may have a .restrictions object like the one described for the root.
