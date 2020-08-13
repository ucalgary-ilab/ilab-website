# ilab-website

TODO
- create a better video compilation
- generate mini profile figure for faster loading
- ask to add people
- ask to add publications
- ask to add abstract
- create publication filter
- filter extended abstract
- ask to add older publications
- ask to add better figures
- create lightbox to add multiple images


# How to Update People

## How to add a new member

1. Go to https://github.com/ucalgary-ilab/ilab-website/tree/master/content/people

2. To Add: Click `Add file` > `Create new File`. To Modify: Click `Edit this file`

3. Type file name as `first-last.yaml`. For example, `ryo-suzuki.yaml`

4. Edit the file. For example

Example 1

```yaml
name: Ryo Suzuki
type: faculty
url: https://ryosuzuki.org
scholar: https://scholar.google.com/citations?user=klWjaQIAAAAJ
twitter: https://twitter.com/ryosuzk
facebook: https://www.facebook.com/ryosuzk
email: ryo.suzuki@ucalgary.ca
github: https://github.com/ryosuzuki
linkedin: https://www.linkedin.com/in/ryosuzuki/
```

Example 2

```yaml
name: Christopher Smith
type: master
url: https://sites.google.com/cse.uiu.ac.bd/ashratuzzavinasha
linkedin: https://www.linkedin.com/in/christopher-smith-uofc/
```

Example 3

```yaml
name: David Ledo
type: alumni
past: phd
now: Autodesk Research
url: https://www.davidledo.com/
scholar: https://scholar.google.com/citations?user=V_2BZDoAAAAJ
```

The required elements are `name` and `type`. Other fields are optional.

For the `type`, please choose from the following options

```yaml
- faculty
- phd
- master
- undergrad
- postdoc
- visiting
- alumni
```

If the member graduates, please modify the profile to `alumni`.
Alumni person can spedcify `past` (prevous type e.g., phd, master, etc) and `now` (current institution).

5. Save and commit the new file



## How to add/modify a profile picture

1. Prepare a profile image. The image needs to be saved as `first-last.jpg`. (The same as the profile file name). For example, `ryo-suzuki.jpg`. Do not use `png` or `jpeg` or anything else. You don't need to crop or edit to the square shape. The system automatically does.

2. Go to https://github.com/ucalgary-ilab/ilab-website/tree/master/static/images/people

3. Click `Upload files`

4. Save and commit the new file

5. If you want to replace, delete the existing one and do the same process.




# How to Update Publication

## How to add/modify a publication

1. Go to https://github.com/ucalgary-ilab/ilab-website/tree/master/content/publications

2. To Add: Click `Add file` > `Create new File`. To Modify: Click `Edit this file`

3. Type file name as `conference-years-lastname.yaml`. For example, `uist-2020-suzuki.yaml`, `mobilehci-2019-hung.yaml`, `chi-ea-2020-suzuki.yaml`

4. Edit the file. For example

Example 1

```yaml
date: 2018-04
title: "Perspective on and Re-orientation of Physical Proxies in Object-Focused Remote Collaboration"
authors:
  - Martin Feick
  - Terrance Tin Hoi Mok
  - Anthony Tang
  - Lora Oehlberg
  - Ehud Sharlin
series: CHI 2018
doi: https://doi.org/10.1145/3173574.3173855
keywords: cscw, remote collaboration, object-focused collaboration, physical telepresence, collaborative physical tasks
pages: 13
award: Honorable Mention
video: https://www.youtube.com/watch?v=sfxTHsPJWHY
abstract: "Remote collaborators working together on physical objects have difficulty building a shared understanding of what each person is talking about. Conventional video chat systems are insufficient for many situations because they present a single view of the object in a flattened image. To understand how this limited perspective affects collaboration, we designed the Remote Manipulator (ReMa), which can reproduce orientation manipulations on a proxy object at a remote site. We conducted two studies with ReMa, with two main findings. First, a shared perspective is more effective and preferred compared to the opposing perspective offered by conventional video chat systems. Second, the physical proxy and video chat complement one another in a combined system: people used the physical proxy to understand objects, and used video chat to perform gestures and confirm remote actions."
```

The required elements are `date`, `title`, `authors` and `series`. Other fields are optional, but strongly recommended.

Aavailable fields are

```yaml
date:
  Conference date (e.g., 2018-04 for CHI'18)

title:
  Use double quotation (e.g., "title")

authors:
  Name the authors in the list. The profile is automatically linked to the publication based on the name

series:
  Conference + Year (e.g., UIST 2020, CHI EA 2021)

doi:
  DOI url. Copy and paste from ACM DL or IEEE Xplore. Can be blank until published

keywords:
  Paper's keywords. Copy and paste from the paper

pages:
  Page-length including references

award:
  Can be blank. Either "Honorable Mention" or "Best Paper"

video:
  YouTube or Vimeo link

video-2:
  If any additional videos

talk:
  YouTube or Vimeo link

abstract:
  Use double quotation (e.g., "abstract")
```

You can basically all of the information from ACM Digital Library or IEEE Xplore.

5. Save and commit the new file

6. The publication page is automatically generated and styled based on the information above.



## How to add/modify a cover figure

1. Prepare a cover figure for the paper. The image needs to be saved as `conference-year-lastname.jpg`. (The same as the publication file name). For example, `uist-2020-suzuki.jpg`, `mobilehci-2019-hung.yaml`, `chi-ea-2020-suzuki.yaml`. Do not use `png` or `jpeg` or anything else. You don't need to crop or edit the aspect ratio. The system automatically does.

1. Go to https://github.com/ucalgary-ilab/ilab-website/tree/master/static/images/publications/cover

2. Click `Add file` > `Upload files`

4. Save and commit the new file

5. If you want to replace, delete the existing one and do the same process.




## How to add more figures

1. You can also add more figures. (Strongly recommended).

2. Prepare figures you used for the paper.

3. Git clone git@github.com:ucalgary-ilab/ilab-website.git

4. Create a directory as `static/images/publications/figures/[conference-year-lastname]`. For example, `static/images/publications/figures/uist-2020-suzuki`

5. Copy and paste all of the figures into the created folder. No need to modify at all. Both jpg, jpeg, png files are available.

6. Git add and git push








