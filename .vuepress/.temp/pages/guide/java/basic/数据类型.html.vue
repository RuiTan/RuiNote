<template><h2 id="基本数据类型" tabindex="-1"><a class="header-anchor" href="#基本数据类型" aria-hidden="true">#</a> 基本数据类型</h2>
<p>Java中的基本数据类型信息如下表所示：</p>
<table>
<thead>
<tr>
<th>基本类型</th>
<th>位数</th>
<th>字节</th>
<th>默认值</th>
<th>取值范围</th>
</tr>
</thead>
<tbody>
<tr>
<td>byte</td>
<td>8</td>
<td>1</td>
<td>0</td>
<td>-128 ~ 127</td>
</tr>
<tr>
<td>short</td>
<td>16</td>
<td>2</td>
<td>0</td>
<td>-32768 ~ 32767</td>
</tr>
<tr>
<td>int</td>
<td>32</td>
<td>4</td>
<td>0</td>
<td>-2147483648 ~ 2147483647</td>
</tr>
<tr>
<td>long</td>
<td>64</td>
<td>8</td>
<td>0L</td>
<td>-9223372036854775808 ~ 9223372036854775807</td>
</tr>
<tr>
<td>char</td>
<td>16</td>
<td>2</td>
<td>'u0000'</td>
<td>0 ~ 65535</td>
</tr>
<tr>
<td>float</td>
<td>32</td>
<td>4</td>
<td>0f</td>
<td>1.4E-45 ~ 3.4028235E38</td>
</tr>
<tr>
<td>double</td>
<td>64</td>
<td>8</td>
<td>0d</td>
<td>4.9E-324 ~ 1.7976931348623157E308</td>
</tr>
<tr>
<td>boolean</td>
<td>1</td>
<td></td>
<td>false</td>
<td>true、false</td>
</tr>
</tbody>
</table>
<h3 id="基本数据类型和对应包装类型的差别" tabindex="-1"><a class="header-anchor" href="#基本数据类型和对应包装类型的差别" aria-hidden="true">#</a> 基本数据类型和对应包装类型的差别</h3>
<p>Java中每个基本数据类型都有对应的包装类型，而Java自带了<strong>自动装箱</strong>和<strong>自动拆箱</strong>机制方便基本类型和包装类型之间的相互转换。基本数据类型和对应包装类型主要有以下差别：</p>
<ol>
<li>基本数据类型实例的身份和值是一个东西；包装类型实例的身份是他的内存地址，与值关系不大；</li>
<li>基本数据类型始终是<strong>有值</strong>的；包装类型可以是<code v-pre>null</code>；</li>
<li>基本数据类型不能用作泛型；包装类型可以；</li>
<li>基本数据类型时、空效率更好。</li>
</ol>
<p>下面代码中，使用包装类型时，在执行第6行时需要频繁地进行自动拆装箱，需要花费较多时间。</p>
<CodeGroup>
<CodeGroupItem title="使用基本数据类型（0.5s左右）">
<div class="language-Java ext-Java line-numbers-mode"><pre v-pre class="language-Java"><code>public class Boxing {
    public static void main(String[] args) {
        long start = System.currentTimeMillis();
        long sum = 0L;
        for(int i=0; i &lt; Integer.MAX_VALUE; i++) {
            sum+=i;
        }
        System.out.println(System.currentTimeMillis() - start);
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br></div></div></CodeGroupItem>
<CodeGroupItem title="使用包装类型，需要自动拆装（6s左右）">
<div class="language-Java ext-Java line-numbers-mode"><pre v-pre class="language-Java"><code>public class Boxing {
    public static void main(String[] args) {
        long start = System.currentTimeMillis();
        Long sum = 0L;
        for(int i=0; i &lt; Integer.MAX_VALUE; i++) {
            sum+=i;
        }
        System.out.println(System.currentTimeMillis() - start);
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br></div></div></CodeGroupItem>
</CodeGroup>
<h3 id="选择依据" tabindex="-1"><a class="header-anchor" href="#选择依据" aria-hidden="true">#</a> 选择依据</h3>
<p>存在以下情况时，选用包装类型，否则使用基础数据类型。</p>
<ol>
<li><code v-pre>null</code>值是可接受的或者可能出现的；</li>
<li>泛型类型必须是包装类型。</li>
</ol>
<h3 id="包装类型的缓存机制" tabindex="-1"><a class="header-anchor" href="#包装类型的缓存机制" aria-hidden="true">#</a> 包装类型的缓存机制</h3>
<p>一些基础类型的包装类型有其缓存机制，即直接取缓存（数组）中的值，而非去堆中重新开辟空间并分配值，以<code v-pre>Integer</code>类为例看源码中的实现：</p>
<CodeGroup>
<CodeGroupItem title="Integer中的缓存实现方式">
<div class="language-Java ext-Java line-numbers-mode"><pre v-pre class="language-Java"><code>private static class IntegerCache {
    static final int low = -128;
    static final int high;
    static final Integer cache[];

    static {
        // high value may be configured by property
        int h = 127;
        String integerCacheHighPropValue =
            sun.misc.VM.getSavedProperty(&quot;java.lang.Integer.IntegerCache.high&quot;);
        if (integerCacheHighPropValue != null) {
            try {
                int i = parseInt(integerCacheHighPropValue);
                i = Math.max(i, 127);
                // Maximum array size is Integer.MAX_VALUE
                h = Math.min(i, Integer.MAX_VALUE - (-low) -1);
            } catch( NumberFormatException nfe) {
                // If the property cannot be parsed into an int, ignore it.
            }
        }
        high = h;

        cache = new Integer[(high - low) + 1];
        int j = low;
        for(int k = 0; k &lt; cache.length; k++)
            cache[k] = new Integer(j++);

        // range [-128, 127] must be interned (JLS7 5.1.7)
        assert IntegerCache.high &gt;= 127;
    }

    private IntegerCache() {}
}

public static Integer valueOf(int i) {
    if (i &gt;= IntegerCache.low &amp;&amp; i &lt;= IntegerCache.high)
        return IntegerCache.cache[i + (-IntegerCache.low)];
    return new Integer(i);
}
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br></div></div></CodeGroupItem>
</CodeGroup>
<p>即将<code v-pre>[-128, 127]</code>区间中的所有数字缓存了起来。除此以外，Byte、Short、Long缓存也为<code v-pre>[-128, 127]</code>，Character缓存区间为<code v-pre>[0, 127]</code>。</p>
<h2 id="string类型" tabindex="-1"><a class="header-anchor" href="#string类型" aria-hidden="true">#</a> String类型</h2>
<p>在Java中String是一个<strong>类</strong>，继承了<code v-pre>Serializable</code>、<code v-pre>Comparable</code>、<code v-pre>CharSequence</code>三个接口。</p>
<h3 id="创建string实例的两种方式" tabindex="-1"><a class="header-anchor" href="#创建string实例的两种方式" aria-hidden="true">#</a> 创建String实例的两种方式</h3>
<ol>
<li>使用<code v-pre>String</code>字面量</li>
</ol>
<FlowChart id="flowchart-64a5682e" code="st%3D%3Estart%3A%20%E5%BC%80%E5%A7%8B%0Ae%3D%3Eend%3A%20%E7%BB%93%E6%9D%9F%0Aop1%3D%3Eoperation%3A%20%E8%BF%94%E5%9B%9E%E5%B8%B8%E9%87%8F%E6%B1%A0%E4%B8%ADString%E5%B8%B8%E9%87%8F%E7%9A%84%E5%BC%95%E7%94%A8%0Aop2%3D%3Eoperation%3A%20%E5%9C%A8%E5%A0%86%E4%B8%AD%E5%BC%80%E8%BE%9F%E4%B8%80%E4%B8%AAchar%E6%95%B0%E7%BB%84%EF%BC%8C%E5%AD%98%E5%82%A8%E5%AD%97%E9%9D%A2%E9%87%8F%0Aop3%3D%3Eoperation%3A%20%E4%BD%BF%E7%94%A8%E4%B8%8A%E4%B8%80%E6%AD%A5%E4%B8%AD%E7%9A%84char%E6%95%B0%E7%BB%84%EF%BC%8C%E5%9C%A8%E5%B8%B8%E9%87%8F%E6%B1%A0%E4%B8%AD%E5%88%9B%E5%BB%BA%E4%B8%80%E4%B8%AAString%E5%B8%B8%E9%87%8F%EF%BC%8C%E5%B9%B6%E8%BF%94%E5%9B%9E%0Asub1%3D%3Esubroutine%3A%20%E5%AD%90%E7%A8%8B%E5%BA%8F%0Acond%3D%3Econdition%3A%20%E5%B8%B8%E9%87%8F%E6%B1%A0%E5%B7%B2%E5%AD%98%E5%9C%A8%3F%0A%0Ast-%3Econd%0Acond(yes)-%3Eop1-%3Ee%0Acond(no%2C%20right)-%3Eop2-%3Eop3-%3Ee%0A" preset="preset"></FlowChart><ol start="2">
<li>使用<code v-pre>new</code>关键字新建</li>
</ol>
<FlowChart id="flowchart-64a567f4" code="st%3D%3Estart%3A%20%E5%BC%80%E5%A7%8B%0Ae%3D%3Eend%3A%20%E7%BB%93%E6%9D%9F%0Aop1%3D%3Eoperation%3A%20%E5%9C%A8%E5%A0%86%E4%B8%AD%E5%BC%80%E8%BE%9F%E4%B8%80%E5%9D%97%E5%86%85%E5%AD%98%EF%BC%8C%E6%A0%B9%E6%8D%AE%E5%AF%B9%E8%B1%A1%E5%88%9D%E5%A7%8B%E5%8C%96%E6%B5%81%E7%A8%8B%E5%88%9D%E5%A7%8B%E5%8C%96%E5%AD%97%E7%AC%A6%E4%B8%B2%E5%AE%9E%E4%BE%8B%0Aop2%3D%3Eoperation%3A%20%E8%BF%94%E5%9B%9E%E8%AF%A5%E5%BC%95%E7%94%A8%0A%0Ast-%3Eop1-%3Eop2-%3Ee%0A" preset="preset"></FlowChart><h3 id="字符串常量池" tabindex="-1"><a class="header-anchor" href="#字符串常量池" aria-hidden="true">#</a> 字符串常量池</h3>
<p>关于字符串常量池，下面的示意图<sup class="footnote-ref"><a href="#footnote1">[1]</a><a class="footnote-anchor" id="footnote-ref1" /></sup>绘制的比较清晰的，很明显字符串常量存储在字符串常量池中。但是要注意的是，这里的<strong>字符串常量</strong>指的是什么？是<code v-pre>Java</code>这个串？还是一个<code v-pre>String</code>类实例？理应是<strong>后者</strong>。</p>
<p><img src="@source/guide/java/imgs/stringpool.png" alt="字符串常量池示意图" loading="lazy"></p>
<p>这样理解的话，上图其实不够准确，<code v-pre>String</code>是一个类，每个<code v-pre>String</code>类实例都包含了2个成员变量<code v-pre>private final char[] value</code>和<code v-pre>private int hash</code>，因此一个<code v-pre>String</code>对象内存布局中实例数据只有<strong>4字节的value数组指针</strong>和<strong>4字节的hash值</strong>（可能还有对齐填充）。也就是说常量池中存的是<code v-pre>String</code>对象实例，而这个实例中的<code v-pre>value</code>将指向堆中的一块区域（<code v-pre>char[]</code>数组）。如下示例：</p>
<CodeGroup>
<CodeGroupItem title="String初始化示例">
<div class="language-Java ext-Java line-numbers-mode"><pre v-pre class="language-Java"><code>String a = &quot;rui&quot;;
String b = &quot;rui&quot;;
String c = new String(&quot;rui&quot;);
char[] chars = new char[]{'r', 'u', 'i'};
String d = new String(chars);
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div></CodeGroupItem>
</CodeGroup>
<p><img src="@source/guide/java/imgs/stringpool2.png" alt="字符串常量池示意图" loading="lazy"></p>
<h3 id="不可变的string" tabindex="-1"><a class="header-anchor" href="#不可变的string" aria-hidden="true">#</a> 不可变的String</h3>
<p>关于String是不可变的，只需记住<strong>String对象</strong>是不可修改的（即无法对该对象中的任何实例数据进行操作），而我们通常进行的String操作修改的都是<strong>引用的指向</strong>。</p>
<p>同时String是<strong>被设计成</strong>不可变的，而非因为其声明了final等关键字<strong>导致其成为了</strong>不可变的。String被设计成不可变的有以下几点原因<sup class="footnote-ref"><a href="#footnote2">[2]</a><a class="footnote-anchor" id="footnote-ref2" /></sup>：</p>
<ul>
<li>节省堆空间。如果不可变，无法使用常量池，堆中将可能存在大量相同的字符串从而浪费空间。</li>
<li>可变字符串会对应用程序构成严重的安全威胁。例如，数据库用户名、密码作为字符串传递以接收数据库连接；套接字编程主机和端口描述也作为字符串传递。由于String不可变，所以它们的值不能改变。如果字符串可变的，黑客可以随意更改引用值，从而在应用程序中引起安全问题。</li>
<li>多线程安全。</li>
<li>保证了类加载过程的安全性。例如，假设我们尝试加载<code v-pre>java.sql.Connection</code>类，但被修改成了<code v-pre>myhacked.Connection</code>类。</li>
</ul>
<div class="custom-container warning"><p class="custom-container-title">破坏String的不可变性</p>
<p>笔者尝试过在JDK8下使用反射更改字符串常量的<code v-pre>value</code>属性，能够成功更改，但是会出现一系列“奇怪”的现象，感兴趣的朋友可以自己试试。由于这些“奇怪”的现象是难以预料和分析的，因此业务代码中不应该出现破坏String不可变性的代码<sup class="footnote-ref"><a href="#footnote3">[3]</a><a class="footnote-anchor" id="footnote-ref3" /></sup>。</p>
<p>另外，JDK11中的反射机制移除了对<code v-pre>private</code>成员常量的修改权限，若修改会抛异常。</p>
</div>
<h2 id="泛型编程" tabindex="-1"><a class="header-anchor" href="#泛型编程" aria-hidden="true">#</a> 泛型编程</h2>
<p>使用泛型编程主要是两个目的：<strong>代码重用</strong>和<strong>类型安全</strong>。</p>
<h3 id="代码重用" tabindex="-1"><a class="header-anchor" href="#代码重用" aria-hidden="true">#</a> 代码重用</h3>
<p>很好理解，当我编写一个类或者方法时，需要对多种类型数据进行相同的操作，实际上没必要为每种输入参数类型重载一个方法。</p>
<p>要注意，使用泛型定义的两个类型会因为泛型类型的不同而不同，如下代码11行所示：</p>
<CodeGroup>
<CodeGroupItem title="泛型示例">
<div class="language-Java ext-Java line-numbers-mode"><pre v-pre class="language-Java"><code>public class Generic&lt;T&gt; {
    private T obj;
    public Generic(T obj) {this.obj = obj;}

    public static void main(String[] args) {
        Generic&lt;Integer&gt; integerGeneric = new Generic&lt;&gt;(1);
        Generic&lt;String&gt; stringGeneric = new Generic&lt;&gt;(&quot;1&quot;);
        System.out.println(integerGeneric instanceof Generic); // true
        System.out.println(stringGeneric instanceof Generic); // true
        System.out.println(stringGeneric.getClass() == integerGeneric.getClass()); // true
        integerGeneric = stringGeneric; // 赋值操作会导致编译错误
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br></div></div></CodeGroupItem>
</CodeGroup>
<h3 id="类型安全" tabindex="-1"><a class="header-anchor" href="#类型安全" aria-hidden="true">#</a> 类型安全</h3>
<p>使用泛型可以帮助我们在<strong>编译时期</strong>而非<strong>运行时期</strong>发现类型不一致的问题。例如我们定义了一个<strong>ArrayList</strong>，希望用其存储一些数字，但未指定泛型类型。此时编译器允许我们往容器中可以添加任意类型的数据而不会报错，那么当我们错误地添加了其他类型数据例如字符串等时，就会造成运行时错误。而使用泛型便能<strong>将该错误提前到编译时期</strong>。</p>
<p>另外，如第9行所示，使用泛型后，我们无需再手动指定类型转换方式。</p>
<CodeGroup>
<CodeGroupItem title="不使用泛型">
<div class="language-Java ext-Java line-numbers-mode"><pre v-pre class="language-Java"><code>public class Generic {
    public static void main(String[] args) {
        ArrayList list = new ArrayList();
        list.add(1);
        list.add(2);
        list.add(&quot;3&quot;); // 编译器不会报错
        int sum = 0;
        for (Object i : list) {
            sum += (Integer) i; // 在第三次循环会抛异常
        }
        System.out.println(sum);
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br></div></div></CodeGroupItem>
<CodeGroupItem title="使用泛型">
<div class="language-Java ext-Java line-numbers-mode"><pre v-pre class="language-Java"><code>public class Generic {
    public static void main(String[] args) {
        ArrayList&lt;Integer&gt; list = new ArrayList&lt;&gt;();
        list.add(1);
        list.add(2);
        list.add(&quot;3&quot;); // 编译器直接报错
        int sum = 0;
        for (Integer i : list) {
            sum += i;
        }
        System.out.println(sum);
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br></div></div></CodeGroupItem>
</CodeGroup>
<hr class="footnotes-sep">
<section class="footnotes">
<ol class="footnotes-list">
<li id="footnote1" class="footnote-item"><p><a href="https://www.javatpoint.com/string-pool-in-java" target="_blank" rel="noopener noreferrer">https://www.javatpoint.com/string-pool-in-java<ExternalLinkIcon/></a> <a href="#footnote-ref1" class="footnote-backref">↩︎</a></p>
</li>
<li id="footnote2" class="footnote-item"><p><a href="https://www.javatpoint.com/why-string-is-immutable-or-final-in-java" target="_blank" rel="noopener noreferrer">https://www.javatpoint.com/why-string-is-immutable-or-final-in-java<ExternalLinkIcon/></a> <a href="#footnote-ref2" class="footnote-backref">↩︎</a></p>
</li>
<li id="footnote3" class="footnote-item"><p><a href="https://stackoverflow.com/questions/1552301/immutability-of-strings-in-java" target="_blank" rel="noopener noreferrer">https://stackoverflow.com/questions/1552301/immutability-of-strings-in-java<ExternalLinkIcon/></a> <a href="#footnote-ref3" class="footnote-backref">↩︎</a></p>
</li>
</ol>
</section>
</template>
