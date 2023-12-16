

test('should take old mens older then 90', ()=>{
    const ages = [18,20,22,1,100,90,14];




    const oldAges = ages.filter(age => age > 90);

    expect(oldAges.length).toBe(1);
    expect(oldAges[0]).toBe(100);
})

test('should take courses chipper 160', ()=>{
    const courses = [
        {title: 'CSS', price: 110},
        {title: 'JS', price: 200},
        {title: 'REACT', price: 150},
    ]

    // const cheapPredicate = (course: CourseType) => {
    //     return course.price <160;
    // }

    const chipperCourses = courses.filter(course => course.price <160);

    expect(chipperCourses.length).toBe(2);
    expect(chipperCourses[0].title).toBe('CSS');
    expect(chipperCourses[1].title).toBe('REACT');
})


test('get only completed tasks', ()=>{
    const tasks = [
        {id:1, title: 'Bread', isDone: false},
        {id:2, title: 'Milk', isDone: true},
        {id:3, title: 'Salt', isDone: false},
        {id:4, title: 'Sugar', isDone: true},
        {id:5, title: 'Water', isDone: false},
    ]

    const completedTasks = tasks.filter(task=> !task.isDone)
    expect(completedTasks.length).toBe(3);
    // expect(completedTasks[0].id).toBe(2);
    // expect(completedTasks[1].id).toBe(4);

})