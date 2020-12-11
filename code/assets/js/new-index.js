// 获取input的内容




$(function() {

    num()
    $('input').on('keydown', function(e) {
        const ee = e.keyCode
            // console.log(ee)
        if (ee == 13) {
            e = e || window.event
            e.preventDefault()
            $(function(e) {
                const aa = $('.input').val()
                if (aa == '') {
                    return console.log("请输入内容")
                } else {
                    const bb = ($('#todolist>li').get())
                    if (bb == '') {
                        str = ''
                        str = `
                                <li class="li">
                                    <input type="checkbox" />
                                    <p onclick="edit(1)">${ aa }</p>
                                    <a class="del">-</a>
                                </li>
                            `
                        $('#todolist').html(str)
                        num()
                    }
                    if (bb != '') {
                        str = ''
                        str = `
                                <li class="li">
                                    <input type="checkbox" />
                                    <p onclick="edit(1)">${ aa }</p>
                                    <a class="del">-</a>
                                </li>
                            `
                        $('#todolist').append(str)
                        num()
                    }

                    $('.input').val("")
                }
            })
        }
    })

    $('#todolist').on('click', 'input', function() {
        const cod = $(this).parent().clone(true)
            // console.log(cod)
        $('#donelist').append(cod)
        $(this).parent().remove()
        num()
    })

    $('#donelist').on('click', 'input', function() {

        const cod = $(this).parent().clone()
            // console.log(cod)

        $('#todolist').append(cod.addClass('active'))
        $(this).parent().remove()
        num()
    })


    // 已完成的删除

    $('#todolist').on('click', 'a', function(e) {
        e = e || window.event
        e.preventDefault()
        e.returnValue = false
        document.onselectstart = function(e) {
            e.preventDefault()
        }
        $(this).parent().remove()
        num()
    })

    $('#donelist').on('click', 'a', function(e) {
        e = e || window.event
        e.preventDefault()
        e.returnValue = false
        document.onselectstart = function(e) {
            e.preventDefault()
        }
        $(this).parent().remove()
        num()
    })

    function num() {
        const intnum = $('#todolist > li').get().length
        const inbnum = $('#donelist > li').get().length

        // console.log(int, inb)
        $('#todocount').html(intnum)
        $('#donecount').html(inbnum)
    }


})