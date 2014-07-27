# willithack

A page that describes the feasibility of using certain domain names.

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
