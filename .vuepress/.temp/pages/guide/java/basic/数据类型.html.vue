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
</template>
